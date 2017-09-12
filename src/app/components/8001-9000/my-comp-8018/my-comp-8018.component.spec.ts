import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8018Component } from './my-comp-8018.component';

describe('MyComp8018Component', () => {
  let component: MyComp8018Component;
  let fixture: ComponentFixture<MyComp8018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
