import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6825Component } from './my-comp-6825.component';

describe('MyComp6825Component', () => {
  let component: MyComp6825Component;
  let fixture: ComponentFixture<MyComp6825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
