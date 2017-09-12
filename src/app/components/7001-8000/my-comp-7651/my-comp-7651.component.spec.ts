import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7651Component } from './my-comp-7651.component';

describe('MyComp7651Component', () => {
  let component: MyComp7651Component;
  let fixture: ComponentFixture<MyComp7651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
