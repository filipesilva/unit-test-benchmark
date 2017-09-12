import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2147Component } from './my-comp-2147.component';

describe('MyComp2147Component', () => {
  let component: MyComp2147Component;
  let fixture: ComponentFixture<MyComp2147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
