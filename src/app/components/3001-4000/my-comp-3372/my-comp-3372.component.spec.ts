import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3372Component } from './my-comp-3372.component';

describe('MyComp3372Component', () => {
  let component: MyComp3372Component;
  let fixture: ComponentFixture<MyComp3372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
