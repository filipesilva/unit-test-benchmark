import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3520Component } from './my-comp-3520.component';

describe('MyComp3520Component', () => {
  let component: MyComp3520Component;
  let fixture: ComponentFixture<MyComp3520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
