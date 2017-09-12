import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3199Component } from './my-comp-3199.component';

describe('MyComp3199Component', () => {
  let component: MyComp3199Component;
  let fixture: ComponentFixture<MyComp3199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
