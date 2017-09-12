import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4376Component } from './my-comp-4376.component';

describe('MyComp4376Component', () => {
  let component: MyComp4376Component;
  let fixture: ComponentFixture<MyComp4376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
