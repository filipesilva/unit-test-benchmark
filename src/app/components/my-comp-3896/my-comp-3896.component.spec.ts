import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3896Component } from './my-comp-3896.component';

describe('MyComp3896Component', () => {
  let component: MyComp3896Component;
  let fixture: ComponentFixture<MyComp3896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
