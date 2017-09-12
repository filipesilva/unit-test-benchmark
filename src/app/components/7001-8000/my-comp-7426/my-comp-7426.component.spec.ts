import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7426Component } from './my-comp-7426.component';

describe('MyComp7426Component', () => {
  let component: MyComp7426Component;
  let fixture: ComponentFixture<MyComp7426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
