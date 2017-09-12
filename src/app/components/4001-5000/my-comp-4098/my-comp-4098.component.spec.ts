import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4098Component } from './my-comp-4098.component';

describe('MyComp4098Component', () => {
  let component: MyComp4098Component;
  let fixture: ComponentFixture<MyComp4098Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4098Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
