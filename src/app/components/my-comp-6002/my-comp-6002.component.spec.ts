import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6002Component } from './my-comp-6002.component';

describe('MyComp6002Component', () => {
  let component: MyComp6002Component;
  let fixture: ComponentFixture<MyComp6002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
