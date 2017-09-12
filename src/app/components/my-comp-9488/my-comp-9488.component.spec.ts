import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9488Component } from './my-comp-9488.component';

describe('MyComp9488Component', () => {
  let component: MyComp9488Component;
  let fixture: ComponentFixture<MyComp9488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
