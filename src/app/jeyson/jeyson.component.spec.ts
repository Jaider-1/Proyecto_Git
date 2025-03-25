import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeysonComponent } from './jeyson.component';

describe('JeysonComponent', () => {
  let component: JeysonComponent;
  let fixture: ComponentFixture<JeysonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeysonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeysonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
