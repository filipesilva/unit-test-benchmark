import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4532Component } from './my-comp-4532.component';

describe('MyComp4532Component', () => {
  let component: MyComp4532Component;
  let fixture: ComponentFixture<MyComp4532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
