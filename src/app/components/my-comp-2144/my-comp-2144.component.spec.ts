import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2144Component } from './my-comp-2144.component';

describe('MyComp2144Component', () => {
  let component: MyComp2144Component;
  let fixture: ComponentFixture<MyComp2144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
