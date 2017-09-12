import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6246Component } from './my-comp-6246.component';

describe('MyComp6246Component', () => {
  let component: MyComp6246Component;
  let fixture: ComponentFixture<MyComp6246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
