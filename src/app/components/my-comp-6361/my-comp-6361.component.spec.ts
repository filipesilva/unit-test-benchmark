import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6361Component } from './my-comp-6361.component';

describe('MyComp6361Component', () => {
  let component: MyComp6361Component;
  let fixture: ComponentFixture<MyComp6361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
