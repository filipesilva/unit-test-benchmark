import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6906Component } from './my-comp-6906.component';

describe('MyComp6906Component', () => {
  let component: MyComp6906Component;
  let fixture: ComponentFixture<MyComp6906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
