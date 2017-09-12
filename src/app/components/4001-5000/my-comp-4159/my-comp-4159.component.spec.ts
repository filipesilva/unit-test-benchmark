import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4159Component } from './my-comp-4159.component';

describe('MyComp4159Component', () => {
  let component: MyComp4159Component;
  let fixture: ComponentFixture<MyComp4159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
