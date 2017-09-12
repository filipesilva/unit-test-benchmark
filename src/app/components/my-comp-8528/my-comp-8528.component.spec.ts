import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8528Component } from './my-comp-8528.component';

describe('MyComp8528Component', () => {
  let component: MyComp8528Component;
  let fixture: ComponentFixture<MyComp8528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
