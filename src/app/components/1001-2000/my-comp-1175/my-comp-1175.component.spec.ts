import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1175Component } from './my-comp-1175.component';

describe('MyComp1175Component', () => {
  let component: MyComp1175Component;
  let fixture: ComponentFixture<MyComp1175Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1175Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
