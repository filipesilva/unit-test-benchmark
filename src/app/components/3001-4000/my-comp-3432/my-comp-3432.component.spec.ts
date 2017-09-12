import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3432Component } from './my-comp-3432.component';

describe('MyComp3432Component', () => {
  let component: MyComp3432Component;
  let fixture: ComponentFixture<MyComp3432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
