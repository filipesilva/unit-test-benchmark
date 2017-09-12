import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2383Component } from './my-comp-2383.component';

describe('MyComp2383Component', () => {
  let component: MyComp2383Component;
  let fixture: ComponentFixture<MyComp2383Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2383Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
