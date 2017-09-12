import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6747Component } from './my-comp-6747.component';

describe('MyComp6747Component', () => {
  let component: MyComp6747Component;
  let fixture: ComponentFixture<MyComp6747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
