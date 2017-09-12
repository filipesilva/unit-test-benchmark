import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6579Component } from './my-comp-6579.component';

describe('MyComp6579Component', () => {
  let component: MyComp6579Component;
  let fixture: ComponentFixture<MyComp6579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
