import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6183Component } from './my-comp-6183.component';

describe('MyComp6183Component', () => {
  let component: MyComp6183Component;
  let fixture: ComponentFixture<MyComp6183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
