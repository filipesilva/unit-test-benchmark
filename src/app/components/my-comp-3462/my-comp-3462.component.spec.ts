import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3462Component } from './my-comp-3462.component';

describe('MyComp3462Component', () => {
  let component: MyComp3462Component;
  let fixture: ComponentFixture<MyComp3462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
