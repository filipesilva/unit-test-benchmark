import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3173Component } from './my-comp-3173.component';

describe('MyComp3173Component', () => {
  let component: MyComp3173Component;
  let fixture: ComponentFixture<MyComp3173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
