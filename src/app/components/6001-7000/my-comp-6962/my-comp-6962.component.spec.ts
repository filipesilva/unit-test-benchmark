import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6962Component } from './my-comp-6962.component';

describe('MyComp6962Component', () => {
  let component: MyComp6962Component;
  let fixture: ComponentFixture<MyComp6962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
