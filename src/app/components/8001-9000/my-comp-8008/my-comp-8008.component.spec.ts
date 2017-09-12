import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8008Component } from './my-comp-8008.component';

describe('MyComp8008Component', () => {
  let component: MyComp8008Component;
  let fixture: ComponentFixture<MyComp8008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
