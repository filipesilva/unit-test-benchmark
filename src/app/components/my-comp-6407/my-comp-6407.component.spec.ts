import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6407Component } from './my-comp-6407.component';

describe('MyComp6407Component', () => {
  let component: MyComp6407Component;
  let fixture: ComponentFixture<MyComp6407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
