import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6172Component } from './my-comp-6172.component';

describe('MyComp6172Component', () => {
  let component: MyComp6172Component;
  let fixture: ComponentFixture<MyComp6172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
