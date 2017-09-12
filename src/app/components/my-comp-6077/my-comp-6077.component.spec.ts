import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6077Component } from './my-comp-6077.component';

describe('MyComp6077Component', () => {
  let component: MyComp6077Component;
  let fixture: ComponentFixture<MyComp6077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
