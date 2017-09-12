import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8914Component } from './my-comp-8914.component';

describe('MyComp8914Component', () => {
  let component: MyComp8914Component;
  let fixture: ComponentFixture<MyComp8914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
