import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6239Component } from './my-comp-6239.component';

describe('MyComp6239Component', () => {
  let component: MyComp6239Component;
  let fixture: ComponentFixture<MyComp6239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
