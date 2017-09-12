import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8036Component } from './my-comp-8036.component';

describe('MyComp8036Component', () => {
  let component: MyComp8036Component;
  let fixture: ComponentFixture<MyComp8036Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8036Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8036Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
