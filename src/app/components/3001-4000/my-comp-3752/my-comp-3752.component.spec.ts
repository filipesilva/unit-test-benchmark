import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3752Component } from './my-comp-3752.component';

describe('MyComp3752Component', () => {
  let component: MyComp3752Component;
  let fixture: ComponentFixture<MyComp3752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
