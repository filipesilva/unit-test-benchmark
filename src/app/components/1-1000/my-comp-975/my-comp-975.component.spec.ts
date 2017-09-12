import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp975Component } from './my-comp-975.component';

describe('MyComp975Component', () => {
  let component: MyComp975Component;
  let fixture: ComponentFixture<MyComp975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
