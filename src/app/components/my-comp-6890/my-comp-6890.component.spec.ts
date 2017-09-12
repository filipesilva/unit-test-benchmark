import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6890Component } from './my-comp-6890.component';

describe('MyComp6890Component', () => {
  let component: MyComp6890Component;
  let fixture: ComponentFixture<MyComp6890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
