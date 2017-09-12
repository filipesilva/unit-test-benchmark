import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3501Component } from './my-comp-3501.component';

describe('MyComp3501Component', () => {
  let component: MyComp3501Component;
  let fixture: ComponentFixture<MyComp3501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
