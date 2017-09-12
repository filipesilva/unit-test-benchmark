import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7798Component } from './my-comp-7798.component';

describe('MyComp7798Component', () => {
  let component: MyComp7798Component;
  let fixture: ComponentFixture<MyComp7798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
