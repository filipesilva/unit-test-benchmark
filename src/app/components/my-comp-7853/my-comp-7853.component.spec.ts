import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7853Component } from './my-comp-7853.component';

describe('MyComp7853Component', () => {
  let component: MyComp7853Component;
  let fixture: ComponentFixture<MyComp7853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
