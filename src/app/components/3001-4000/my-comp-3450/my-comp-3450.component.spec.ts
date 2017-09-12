import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3450Component } from './my-comp-3450.component';

describe('MyComp3450Component', () => {
  let component: MyComp3450Component;
  let fixture: ComponentFixture<MyComp3450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
