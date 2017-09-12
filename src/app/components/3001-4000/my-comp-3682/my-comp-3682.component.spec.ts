import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3682Component } from './my-comp-3682.component';

describe('MyComp3682Component', () => {
  let component: MyComp3682Component;
  let fixture: ComponentFixture<MyComp3682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
