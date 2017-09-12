import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6406Component } from './my-comp-6406.component';

describe('MyComp6406Component', () => {
  let component: MyComp6406Component;
  let fixture: ComponentFixture<MyComp6406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
