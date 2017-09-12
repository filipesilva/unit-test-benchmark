import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9295Component } from './my-comp-9295.component';

describe('MyComp9295Component', () => {
  let component: MyComp9295Component;
  let fixture: ComponentFixture<MyComp9295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
