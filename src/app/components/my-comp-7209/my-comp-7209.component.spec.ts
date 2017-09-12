import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7209Component } from './my-comp-7209.component';

describe('MyComp7209Component', () => {
  let component: MyComp7209Component;
  let fixture: ComponentFixture<MyComp7209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
