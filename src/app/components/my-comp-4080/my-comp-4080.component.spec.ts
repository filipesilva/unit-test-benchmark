import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4080Component } from './my-comp-4080.component';

describe('MyComp4080Component', () => {
  let component: MyComp4080Component;
  let fixture: ComponentFixture<MyComp4080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
