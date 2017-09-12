import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6401Component } from './my-comp-6401.component';

describe('MyComp6401Component', () => {
  let component: MyComp6401Component;
  let fixture: ComponentFixture<MyComp6401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
