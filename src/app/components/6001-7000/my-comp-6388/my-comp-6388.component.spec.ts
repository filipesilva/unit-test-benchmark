import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6388Component } from './my-comp-6388.component';

describe('MyComp6388Component', () => {
  let component: MyComp6388Component;
  let fixture: ComponentFixture<MyComp6388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
