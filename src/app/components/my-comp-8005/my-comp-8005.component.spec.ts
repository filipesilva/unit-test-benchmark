import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8005Component } from './my-comp-8005.component';

describe('MyComp8005Component', () => {
  let component: MyComp8005Component;
  let fixture: ComponentFixture<MyComp8005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
