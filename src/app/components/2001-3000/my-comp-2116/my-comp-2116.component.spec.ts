import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2116Component } from './my-comp-2116.component';

describe('MyComp2116Component', () => {
  let component: MyComp2116Component;
  let fixture: ComponentFixture<MyComp2116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
