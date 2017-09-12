import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9294Component } from './my-comp-9294.component';

describe('MyComp9294Component', () => {
  let component: MyComp9294Component;
  let fixture: ComponentFixture<MyComp9294Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9294Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
