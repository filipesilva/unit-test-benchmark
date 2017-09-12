import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5526Component } from './my-comp-5526.component';

describe('MyComp5526Component', () => {
  let component: MyComp5526Component;
  let fixture: ComponentFixture<MyComp5526Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5526Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5526Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
