import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6601Component } from './my-comp-6601.component';

describe('MyComp6601Component', () => {
  let component: MyComp6601Component;
  let fixture: ComponentFixture<MyComp6601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
