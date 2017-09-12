import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6553Component } from './my-comp-6553.component';

describe('MyComp6553Component', () => {
  let component: MyComp6553Component;
  let fixture: ComponentFixture<MyComp6553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
