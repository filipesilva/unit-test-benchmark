import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2724Component } from './my-comp-2724.component';

describe('MyComp2724Component', () => {
  let component: MyComp2724Component;
  let fixture: ComponentFixture<MyComp2724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
