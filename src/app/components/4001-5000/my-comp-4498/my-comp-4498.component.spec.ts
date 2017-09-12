import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4498Component } from './my-comp-4498.component';

describe('MyComp4498Component', () => {
  let component: MyComp4498Component;
  let fixture: ComponentFixture<MyComp4498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
