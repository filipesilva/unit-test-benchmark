import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9981Component } from './my-comp-9981.component';

describe('MyComp9981Component', () => {
  let component: MyComp9981Component;
  let fixture: ComponentFixture<MyComp9981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
