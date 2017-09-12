import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3141Component } from './my-comp-3141.component';

describe('MyComp3141Component', () => {
  let component: MyComp3141Component;
  let fixture: ComponentFixture<MyComp3141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
