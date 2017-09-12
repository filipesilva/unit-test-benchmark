import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3439Component } from './my-comp-3439.component';

describe('MyComp3439Component', () => {
  let component: MyComp3439Component;
  let fixture: ComponentFixture<MyComp3439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
