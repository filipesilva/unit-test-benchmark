import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6672Component } from './my-comp-6672.component';

describe('MyComp6672Component', () => {
  let component: MyComp6672Component;
  let fixture: ComponentFixture<MyComp6672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
