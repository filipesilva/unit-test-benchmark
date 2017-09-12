import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8531Component } from './my-comp-8531.component';

describe('MyComp8531Component', () => {
  let component: MyComp8531Component;
  let fixture: ComponentFixture<MyComp8531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
