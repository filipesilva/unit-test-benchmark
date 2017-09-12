import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4234Component } from './my-comp-4234.component';

describe('MyComp4234Component', () => {
  let component: MyComp4234Component;
  let fixture: ComponentFixture<MyComp4234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
