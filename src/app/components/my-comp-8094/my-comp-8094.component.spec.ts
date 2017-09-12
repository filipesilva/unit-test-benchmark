import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8094Component } from './my-comp-8094.component';

describe('MyComp8094Component', () => {
  let component: MyComp8094Component;
  let fixture: ComponentFixture<MyComp8094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
