import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3666Component } from './my-comp-3666.component';

describe('MyComp3666Component', () => {
  let component: MyComp3666Component;
  let fixture: ComponentFixture<MyComp3666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
