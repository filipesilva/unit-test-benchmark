import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4651Component } from './my-comp-4651.component';

describe('MyComp4651Component', () => {
  let component: MyComp4651Component;
  let fixture: ComponentFixture<MyComp4651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
