import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3096Component } from './my-comp-3096.component';

describe('MyComp3096Component', () => {
  let component: MyComp3096Component;
  let fixture: ComponentFixture<MyComp3096Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3096Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
