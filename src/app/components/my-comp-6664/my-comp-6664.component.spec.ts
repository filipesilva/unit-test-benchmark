import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6664Component } from './my-comp-6664.component';

describe('MyComp6664Component', () => {
  let component: MyComp6664Component;
  let fixture: ComponentFixture<MyComp6664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
