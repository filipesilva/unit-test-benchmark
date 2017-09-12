import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp282Component } from './my-comp-282.component';

describe('MyComp282Component', () => {
  let component: MyComp282Component;
  let fixture: ComponentFixture<MyComp282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
