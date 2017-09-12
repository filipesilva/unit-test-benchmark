import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3680Component } from './my-comp-3680.component';

describe('MyComp3680Component', () => {
  let component: MyComp3680Component;
  let fixture: ComponentFixture<MyComp3680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
