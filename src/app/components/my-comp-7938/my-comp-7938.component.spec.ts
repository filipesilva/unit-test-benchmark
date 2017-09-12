import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7938Component } from './my-comp-7938.component';

describe('MyComp7938Component', () => {
  let component: MyComp7938Component;
  let fixture: ComponentFixture<MyComp7938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
