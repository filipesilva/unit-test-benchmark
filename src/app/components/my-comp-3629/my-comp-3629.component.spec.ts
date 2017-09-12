import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3629Component } from './my-comp-3629.component';

describe('MyComp3629Component', () => {
  let component: MyComp3629Component;
  let fixture: ComponentFixture<MyComp3629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
