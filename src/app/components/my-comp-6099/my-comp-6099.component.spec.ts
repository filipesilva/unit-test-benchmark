import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6099Component } from './my-comp-6099.component';

describe('MyComp6099Component', () => {
  let component: MyComp6099Component;
  let fixture: ComponentFixture<MyComp6099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
