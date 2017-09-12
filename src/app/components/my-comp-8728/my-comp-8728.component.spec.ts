import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8728Component } from './my-comp-8728.component';

describe('MyComp8728Component', () => {
  let component: MyComp8728Component;
  let fixture: ComponentFixture<MyComp8728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
