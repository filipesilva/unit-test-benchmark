import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4431Component } from './my-comp-4431.component';

describe('MyComp4431Component', () => {
  let component: MyComp4431Component;
  let fixture: ComponentFixture<MyComp4431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
