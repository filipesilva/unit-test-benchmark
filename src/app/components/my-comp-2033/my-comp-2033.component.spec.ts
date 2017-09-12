import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2033Component } from './my-comp-2033.component';

describe('MyComp2033Component', () => {
  let component: MyComp2033Component;
  let fixture: ComponentFixture<MyComp2033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
