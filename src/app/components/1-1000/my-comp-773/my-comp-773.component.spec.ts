import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp773Component } from './my-comp-773.component';

describe('MyComp773Component', () => {
  let component: MyComp773Component;
  let fixture: ComponentFixture<MyComp773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
