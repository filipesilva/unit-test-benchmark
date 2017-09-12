import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8179Component } from './my-comp-8179.component';

describe('MyComp8179Component', () => {
  let component: MyComp8179Component;
  let fixture: ComponentFixture<MyComp8179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
