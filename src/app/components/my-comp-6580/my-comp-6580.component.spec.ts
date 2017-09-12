import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6580Component } from './my-comp-6580.component';

describe('MyComp6580Component', () => {
  let component: MyComp6580Component;
  let fixture: ComponentFixture<MyComp6580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
