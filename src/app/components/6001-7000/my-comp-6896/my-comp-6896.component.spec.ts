import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6896Component } from './my-comp-6896.component';

describe('MyComp6896Component', () => {
  let component: MyComp6896Component;
  let fixture: ComponentFixture<MyComp6896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
