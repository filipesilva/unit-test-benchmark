import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7712Component } from './my-comp-7712.component';

describe('MyComp7712Component', () => {
  let component: MyComp7712Component;
  let fixture: ComponentFixture<MyComp7712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
