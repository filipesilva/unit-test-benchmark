import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4581Component } from './my-comp-4581.component';

describe('MyComp4581Component', () => {
  let component: MyComp4581Component;
  let fixture: ComponentFixture<MyComp4581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
