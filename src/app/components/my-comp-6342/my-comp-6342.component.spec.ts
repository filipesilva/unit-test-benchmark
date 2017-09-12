import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6342Component } from './my-comp-6342.component';

describe('MyComp6342Component', () => {
  let component: MyComp6342Component;
  let fixture: ComponentFixture<MyComp6342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
