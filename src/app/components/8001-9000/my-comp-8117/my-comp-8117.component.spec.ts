import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8117Component } from './my-comp-8117.component';

describe('MyComp8117Component', () => {
  let component: MyComp8117Component;
  let fixture: ComponentFixture<MyComp8117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
