import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6440Component } from './my-comp-6440.component';

describe('MyComp6440Component', () => {
  let component: MyComp6440Component;
  let fixture: ComponentFixture<MyComp6440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
