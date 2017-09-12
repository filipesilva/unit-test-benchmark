import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3344Component } from './my-comp-3344.component';

describe('MyComp3344Component', () => {
  let component: MyComp3344Component;
  let fixture: ComponentFixture<MyComp3344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
