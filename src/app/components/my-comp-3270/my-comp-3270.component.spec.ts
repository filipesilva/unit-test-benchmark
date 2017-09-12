import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3270Component } from './my-comp-3270.component';

describe('MyComp3270Component', () => {
  let component: MyComp3270Component;
  let fixture: ComponentFixture<MyComp3270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
