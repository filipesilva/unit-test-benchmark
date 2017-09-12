import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5173Component } from './my-comp-5173.component';

describe('MyComp5173Component', () => {
  let component: MyComp5173Component;
  let fixture: ComponentFixture<MyComp5173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
