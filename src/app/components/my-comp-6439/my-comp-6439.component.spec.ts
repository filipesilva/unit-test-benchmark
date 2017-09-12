import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6439Component } from './my-comp-6439.component';

describe('MyComp6439Component', () => {
  let component: MyComp6439Component;
  let fixture: ComponentFixture<MyComp6439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
