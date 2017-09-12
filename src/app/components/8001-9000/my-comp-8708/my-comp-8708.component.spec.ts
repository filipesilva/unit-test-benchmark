import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8708Component } from './my-comp-8708.component';

describe('MyComp8708Component', () => {
  let component: MyComp8708Component;
  let fixture: ComponentFixture<MyComp8708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
