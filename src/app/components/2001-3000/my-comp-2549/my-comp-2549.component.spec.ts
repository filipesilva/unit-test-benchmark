import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2549Component } from './my-comp-2549.component';

describe('MyComp2549Component', () => {
  let component: MyComp2549Component;
  let fixture: ComponentFixture<MyComp2549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
