import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3377Component } from './my-comp-3377.component';

describe('MyComp3377Component', () => {
  let component: MyComp3377Component;
  let fixture: ComponentFixture<MyComp3377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
