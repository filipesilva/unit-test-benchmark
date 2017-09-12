import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9820Component } from './my-comp-9820.component';

describe('MyComp9820Component', () => {
  let component: MyComp9820Component;
  let fixture: ComponentFixture<MyComp9820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
