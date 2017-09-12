import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6980Component } from './my-comp-6980.component';

describe('MyComp6980Component', () => {
  let component: MyComp6980Component;
  let fixture: ComponentFixture<MyComp6980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
