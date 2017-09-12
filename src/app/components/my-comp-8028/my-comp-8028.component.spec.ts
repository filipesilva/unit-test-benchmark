import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8028Component } from './my-comp-8028.component';

describe('MyComp8028Component', () => {
  let component: MyComp8028Component;
  let fixture: ComponentFixture<MyComp8028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
