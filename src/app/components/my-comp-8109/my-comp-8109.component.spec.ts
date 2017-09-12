import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8109Component } from './my-comp-8109.component';

describe('MyComp8109Component', () => {
  let component: MyComp8109Component;
  let fixture: ComponentFixture<MyComp8109Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8109Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
