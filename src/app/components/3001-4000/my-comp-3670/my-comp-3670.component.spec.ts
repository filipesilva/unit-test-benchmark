import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3670Component } from './my-comp-3670.component';

describe('MyComp3670Component', () => {
  let component: MyComp3670Component;
  let fixture: ComponentFixture<MyComp3670Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3670Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
