import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3203Component } from './my-comp-3203.component';

describe('MyComp3203Component', () => {
  let component: MyComp3203Component;
  let fixture: ComponentFixture<MyComp3203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
