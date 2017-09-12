import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3695Component } from './my-comp-3695.component';

describe('MyComp3695Component', () => {
  let component: MyComp3695Component;
  let fixture: ComponentFixture<MyComp3695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
