import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8488Component } from './my-comp-8488.component';

describe('MyComp8488Component', () => {
  let component: MyComp8488Component;
  let fixture: ComponentFixture<MyComp8488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
