import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8344Component } from './my-comp-8344.component';

describe('MyComp8344Component', () => {
  let component: MyComp8344Component;
  let fixture: ComponentFixture<MyComp8344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
