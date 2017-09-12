import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3809Component } from './my-comp-3809.component';

describe('MyComp3809Component', () => {
  let component: MyComp3809Component;
  let fixture: ComponentFixture<MyComp3809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
