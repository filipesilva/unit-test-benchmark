import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp530Component } from './my-comp-530.component';

describe('MyComp530Component', () => {
  let component: MyComp530Component;
  let fixture: ComponentFixture<MyComp530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
