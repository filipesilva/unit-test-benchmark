import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp588Component } from './my-comp-588.component';

describe('MyComp588Component', () => {
  let component: MyComp588Component;
  let fixture: ComponentFixture<MyComp588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
