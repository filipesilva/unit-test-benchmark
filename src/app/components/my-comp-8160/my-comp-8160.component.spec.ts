import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8160Component } from './my-comp-8160.component';

describe('MyComp8160Component', () => {
  let component: MyComp8160Component;
  let fixture: ComponentFixture<MyComp8160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
