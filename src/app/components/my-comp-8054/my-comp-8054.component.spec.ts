import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8054Component } from './my-comp-8054.component';

describe('MyComp8054Component', () => {
  let component: MyComp8054Component;
  let fixture: ComponentFixture<MyComp8054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
