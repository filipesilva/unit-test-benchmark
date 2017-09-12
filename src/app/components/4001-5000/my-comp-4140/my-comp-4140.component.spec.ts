import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4140Component } from './my-comp-4140.component';

describe('MyComp4140Component', () => {
  let component: MyComp4140Component;
  let fixture: ComponentFixture<MyComp4140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
