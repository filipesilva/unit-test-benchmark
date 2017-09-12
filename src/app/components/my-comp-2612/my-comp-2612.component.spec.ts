import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2612Component } from './my-comp-2612.component';

describe('MyComp2612Component', () => {
  let component: MyComp2612Component;
  let fixture: ComponentFixture<MyComp2612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
