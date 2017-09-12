import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3234Component } from './my-comp-3234.component';

describe('MyComp3234Component', () => {
  let component: MyComp3234Component;
  let fixture: ComponentFixture<MyComp3234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
