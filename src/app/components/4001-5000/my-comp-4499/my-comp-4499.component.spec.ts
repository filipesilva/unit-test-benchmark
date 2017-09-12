import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4499Component } from './my-comp-4499.component';

describe('MyComp4499Component', () => {
  let component: MyComp4499Component;
  let fixture: ComponentFixture<MyComp4499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
