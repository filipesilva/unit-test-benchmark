import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9897Component } from './my-comp-9897.component';

describe('MyComp9897Component', () => {
  let component: MyComp9897Component;
  let fixture: ComponentFixture<MyComp9897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
