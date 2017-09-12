import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8722Component } from './my-comp-8722.component';

describe('MyComp8722Component', () => {
  let component: MyComp8722Component;
  let fixture: ComponentFixture<MyComp8722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
