import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2486Component } from './my-comp-2486.component';

describe('MyComp2486Component', () => {
  let component: MyComp2486Component;
  let fixture: ComponentFixture<MyComp2486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
