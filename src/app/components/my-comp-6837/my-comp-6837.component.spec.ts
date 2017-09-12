import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6837Component } from './my-comp-6837.component';

describe('MyComp6837Component', () => {
  let component: MyComp6837Component;
  let fixture: ComponentFixture<MyComp6837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
