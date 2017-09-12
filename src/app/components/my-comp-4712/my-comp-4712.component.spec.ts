import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4712Component } from './my-comp-4712.component';

describe('MyComp4712Component', () => {
  let component: MyComp4712Component;
  let fixture: ComponentFixture<MyComp4712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
