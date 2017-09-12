import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3526Component } from './my-comp-3526.component';

describe('MyComp3526Component', () => {
  let component: MyComp3526Component;
  let fixture: ComponentFixture<MyComp3526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
