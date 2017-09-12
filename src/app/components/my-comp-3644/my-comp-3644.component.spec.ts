import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3644Component } from './my-comp-3644.component';

describe('MyComp3644Component', () => {
  let component: MyComp3644Component;
  let fixture: ComponentFixture<MyComp3644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
