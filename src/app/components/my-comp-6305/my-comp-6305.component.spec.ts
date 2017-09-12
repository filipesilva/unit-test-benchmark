import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6305Component } from './my-comp-6305.component';

describe('MyComp6305Component', () => {
  let component: MyComp6305Component;
  let fixture: ComponentFixture<MyComp6305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
