import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8353Component } from './my-comp-8353.component';

describe('MyComp8353Component', () => {
  let component: MyComp8353Component;
  let fixture: ComponentFixture<MyComp8353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
