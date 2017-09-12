import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4154Component } from './my-comp-4154.component';

describe('MyComp4154Component', () => {
  let component: MyComp4154Component;
  let fixture: ComponentFixture<MyComp4154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
