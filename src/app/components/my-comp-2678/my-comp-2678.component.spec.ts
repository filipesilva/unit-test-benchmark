import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2678Component } from './my-comp-2678.component';

describe('MyComp2678Component', () => {
  let component: MyComp2678Component;
  let fixture: ComponentFixture<MyComp2678Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2678Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
