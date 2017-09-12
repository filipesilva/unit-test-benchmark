import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp158Component } from './my-comp-158.component';

describe('MyComp158Component', () => {
  let component: MyComp158Component;
  let fixture: ComponentFixture<MyComp158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
