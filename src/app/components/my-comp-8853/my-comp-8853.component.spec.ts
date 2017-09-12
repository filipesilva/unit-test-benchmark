import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8853Component } from './my-comp-8853.component';

describe('MyComp8853Component', () => {
  let component: MyComp8853Component;
  let fixture: ComponentFixture<MyComp8853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
