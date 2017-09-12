import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7052Component } from './my-comp-7052.component';

describe('MyComp7052Component', () => {
  let component: MyComp7052Component;
  let fixture: ComponentFixture<MyComp7052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
