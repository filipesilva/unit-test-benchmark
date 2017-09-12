import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6528Component } from './my-comp-6528.component';

describe('MyComp6528Component', () => {
  let component: MyComp6528Component;
  let fixture: ComponentFixture<MyComp6528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
