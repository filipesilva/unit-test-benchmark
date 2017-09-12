import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3128Component } from './my-comp-3128.component';

describe('MyComp3128Component', () => {
  let component: MyComp3128Component;
  let fixture: ComponentFixture<MyComp3128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
