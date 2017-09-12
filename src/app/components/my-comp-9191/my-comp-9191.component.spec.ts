import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9191Component } from './my-comp-9191.component';

describe('MyComp9191Component', () => {
  let component: MyComp9191Component;
  let fixture: ComponentFixture<MyComp9191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
