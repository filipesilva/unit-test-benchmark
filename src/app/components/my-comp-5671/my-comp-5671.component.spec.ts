import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5671Component } from './my-comp-5671.component';

describe('MyComp5671Component', () => {
  let component: MyComp5671Component;
  let fixture: ComponentFixture<MyComp5671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
