import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6066Component } from './my-comp-6066.component';

describe('MyComp6066Component', () => {
  let component: MyComp6066Component;
  let fixture: ComponentFixture<MyComp6066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
