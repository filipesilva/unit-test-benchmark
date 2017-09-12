import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3415Component } from './my-comp-3415.component';

describe('MyComp3415Component', () => {
  let component: MyComp3415Component;
  let fixture: ComponentFixture<MyComp3415Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3415Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
