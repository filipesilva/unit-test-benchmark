import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2824Component } from './my-comp-2824.component';

describe('MyComp2824Component', () => {
  let component: MyComp2824Component;
  let fixture: ComponentFixture<MyComp2824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
