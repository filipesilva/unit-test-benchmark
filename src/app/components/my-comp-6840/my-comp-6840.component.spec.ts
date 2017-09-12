import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6840Component } from './my-comp-6840.component';

describe('MyComp6840Component', () => {
  let component: MyComp6840Component;
  let fixture: ComponentFixture<MyComp6840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
