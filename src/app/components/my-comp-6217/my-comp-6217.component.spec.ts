import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6217Component } from './my-comp-6217.component';

describe('MyComp6217Component', () => {
  let component: MyComp6217Component;
  let fixture: ComponentFixture<MyComp6217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
