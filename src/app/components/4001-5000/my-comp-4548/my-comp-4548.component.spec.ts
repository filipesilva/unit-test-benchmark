import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4548Component } from './my-comp-4548.component';

describe('MyComp4548Component', () => {
  let component: MyComp4548Component;
  let fixture: ComponentFixture<MyComp4548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
