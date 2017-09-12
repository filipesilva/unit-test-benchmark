import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3354Component } from './my-comp-3354.component';

describe('MyComp3354Component', () => {
  let component: MyComp3354Component;
  let fixture: ComponentFixture<MyComp3354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
