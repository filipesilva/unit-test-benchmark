import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6652Component } from './my-comp-6652.component';

describe('MyComp6652Component', () => {
  let component: MyComp6652Component;
  let fixture: ComponentFixture<MyComp6652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
