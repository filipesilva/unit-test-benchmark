import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9039Component } from './my-comp-9039.component';

describe('MyComp9039Component', () => {
  let component: MyComp9039Component;
  let fixture: ComponentFixture<MyComp9039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
