import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9612Component } from './my-comp-9612.component';

describe('MyComp9612Component', () => {
  let component: MyComp9612Component;
  let fixture: ComponentFixture<MyComp9612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
