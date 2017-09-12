import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2347Component } from './my-comp-2347.component';

describe('MyComp2347Component', () => {
  let component: MyComp2347Component;
  let fixture: ComponentFixture<MyComp2347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
