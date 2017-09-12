import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp531Component } from './my-comp-531.component';

describe('MyComp531Component', () => {
  let component: MyComp531Component;
  let fixture: ComponentFixture<MyComp531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
