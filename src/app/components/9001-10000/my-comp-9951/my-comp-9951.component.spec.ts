import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9951Component } from './my-comp-9951.component';

describe('MyComp9951Component', () => {
  let component: MyComp9951Component;
  let fixture: ComponentFixture<MyComp9951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
