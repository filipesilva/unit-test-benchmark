import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3935Component } from './my-comp-3935.component';

describe('MyComp3935Component', () => {
  let component: MyComp3935Component;
  let fixture: ComponentFixture<MyComp3935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
