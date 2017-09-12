import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3062Component } from './my-comp-3062.component';

describe('MyComp3062Component', () => {
  let component: MyComp3062Component;
  let fixture: ComponentFixture<MyComp3062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
