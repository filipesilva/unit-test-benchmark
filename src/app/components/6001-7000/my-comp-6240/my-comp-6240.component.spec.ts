import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6240Component } from './my-comp-6240.component';

describe('MyComp6240Component', () => {
  let component: MyComp6240Component;
  let fixture: ComponentFixture<MyComp6240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
