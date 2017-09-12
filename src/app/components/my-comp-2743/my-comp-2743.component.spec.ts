import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2743Component } from './my-comp-2743.component';

describe('MyComp2743Component', () => {
  let component: MyComp2743Component;
  let fixture: ComponentFixture<MyComp2743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
