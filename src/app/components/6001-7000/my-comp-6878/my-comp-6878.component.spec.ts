import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6878Component } from './my-comp-6878.component';

describe('MyComp6878Component', () => {
  let component: MyComp6878Component;
  let fixture: ComponentFixture<MyComp6878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
