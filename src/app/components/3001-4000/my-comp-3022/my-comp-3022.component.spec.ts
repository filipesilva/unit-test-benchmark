import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3022Component } from './my-comp-3022.component';

describe('MyComp3022Component', () => {
  let component: MyComp3022Component;
  let fixture: ComponentFixture<MyComp3022Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3022Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
