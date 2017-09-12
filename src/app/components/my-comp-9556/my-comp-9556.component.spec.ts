import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9556Component } from './my-comp-9556.component';

describe('MyComp9556Component', () => {
  let component: MyComp9556Component;
  let fixture: ComponentFixture<MyComp9556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
