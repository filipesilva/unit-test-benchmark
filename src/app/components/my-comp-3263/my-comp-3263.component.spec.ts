import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3263Component } from './my-comp-3263.component';

describe('MyComp3263Component', () => {
  let component: MyComp3263Component;
  let fixture: ComponentFixture<MyComp3263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
