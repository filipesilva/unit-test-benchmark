import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2665Component } from './my-comp-2665.component';

describe('MyComp2665Component', () => {
  let component: MyComp2665Component;
  let fixture: ComponentFixture<MyComp2665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
