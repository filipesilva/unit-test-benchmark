import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9900Component } from './my-comp-9900.component';

describe('MyComp9900Component', () => {
  let component: MyComp9900Component;
  let fixture: ComponentFixture<MyComp9900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
