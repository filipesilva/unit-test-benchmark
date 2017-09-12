import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2200Component } from './my-comp-2200.component';

describe('MyComp2200Component', () => {
  let component: MyComp2200Component;
  let fixture: ComponentFixture<MyComp2200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
