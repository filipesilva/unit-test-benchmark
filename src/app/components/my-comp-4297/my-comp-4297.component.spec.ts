import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4297Component } from './my-comp-4297.component';

describe('MyComp4297Component', () => {
  let component: MyComp4297Component;
  let fixture: ComponentFixture<MyComp4297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
