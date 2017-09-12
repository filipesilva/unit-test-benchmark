import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8297Component } from './my-comp-8297.component';

describe('MyComp8297Component', () => {
  let component: MyComp8297Component;
  let fixture: ComponentFixture<MyComp8297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
