import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6855Component } from './my-comp-6855.component';

describe('MyComp6855Component', () => {
  let component: MyComp6855Component;
  let fixture: ComponentFixture<MyComp6855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
