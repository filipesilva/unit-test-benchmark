import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4840Component } from './my-comp-4840.component';

describe('MyComp4840Component', () => {
  let component: MyComp4840Component;
  let fixture: ComponentFixture<MyComp4840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
