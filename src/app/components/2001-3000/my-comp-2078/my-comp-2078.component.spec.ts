import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2078Component } from './my-comp-2078.component';

describe('MyComp2078Component', () => {
  let component: MyComp2078Component;
  let fixture: ComponentFixture<MyComp2078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
