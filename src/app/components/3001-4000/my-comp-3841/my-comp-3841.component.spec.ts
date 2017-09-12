import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3841Component } from './my-comp-3841.component';

describe('MyComp3841Component', () => {
  let component: MyComp3841Component;
  let fixture: ComponentFixture<MyComp3841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
