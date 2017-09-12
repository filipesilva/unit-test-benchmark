import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4494Component } from './my-comp-4494.component';

describe('MyComp4494Component', () => {
  let component: MyComp4494Component;
  let fixture: ComponentFixture<MyComp4494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
