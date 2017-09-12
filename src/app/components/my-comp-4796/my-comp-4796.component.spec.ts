import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4796Component } from './my-comp-4796.component';

describe('MyComp4796Component', () => {
  let component: MyComp4796Component;
  let fixture: ComponentFixture<MyComp4796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
