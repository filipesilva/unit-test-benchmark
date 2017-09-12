import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4730Component } from './my-comp-4730.component';

describe('MyComp4730Component', () => {
  let component: MyComp4730Component;
  let fixture: ComponentFixture<MyComp4730Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4730Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
