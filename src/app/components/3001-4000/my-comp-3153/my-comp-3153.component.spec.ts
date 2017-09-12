import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3153Component } from './my-comp-3153.component';

describe('MyComp3153Component', () => {
  let component: MyComp3153Component;
  let fixture: ComponentFixture<MyComp3153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
