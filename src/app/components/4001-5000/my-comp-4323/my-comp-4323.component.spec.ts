import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4323Component } from './my-comp-4323.component';

describe('MyComp4323Component', () => {
  let component: MyComp4323Component;
  let fixture: ComponentFixture<MyComp4323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
