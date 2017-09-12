import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4954Component } from './my-comp-4954.component';

describe('MyComp4954Component', () => {
  let component: MyComp4954Component;
  let fixture: ComponentFixture<MyComp4954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
