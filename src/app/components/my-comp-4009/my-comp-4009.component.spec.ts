import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4009Component } from './my-comp-4009.component';

describe('MyComp4009Component', () => {
  let component: MyComp4009Component;
  let fixture: ComponentFixture<MyComp4009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
