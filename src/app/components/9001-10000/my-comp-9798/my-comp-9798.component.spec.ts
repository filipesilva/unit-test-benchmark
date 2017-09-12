import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9798Component } from './my-comp-9798.component';

describe('MyComp9798Component', () => {
  let component: MyComp9798Component;
  let fixture: ComponentFixture<MyComp9798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
