import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7288Component } from './my-comp-7288.component';

describe('MyComp7288Component', () => {
  let component: MyComp7288Component;
  let fixture: ComponentFixture<MyComp7288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
