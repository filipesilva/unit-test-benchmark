import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3604Component } from './my-comp-3604.component';

describe('MyComp3604Component', () => {
  let component: MyComp3604Component;
  let fixture: ComponentFixture<MyComp3604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
