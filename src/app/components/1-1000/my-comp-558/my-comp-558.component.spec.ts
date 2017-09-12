import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp558Component } from './my-comp-558.component';

describe('MyComp558Component', () => {
  let component: MyComp558Component;
  let fixture: ComponentFixture<MyComp558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
