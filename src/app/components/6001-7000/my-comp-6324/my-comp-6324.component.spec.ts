import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6324Component } from './my-comp-6324.component';

describe('MyComp6324Component', () => {
  let component: MyComp6324Component;
  let fixture: ComponentFixture<MyComp6324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
