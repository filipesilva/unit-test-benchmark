import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4671Component } from './my-comp-4671.component';

describe('MyComp4671Component', () => {
  let component: MyComp4671Component;
  let fixture: ComponentFixture<MyComp4671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
