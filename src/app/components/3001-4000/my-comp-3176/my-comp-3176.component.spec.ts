import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3176Component } from './my-comp-3176.component';

describe('MyComp3176Component', () => {
  let component: MyComp3176Component;
  let fixture: ComponentFixture<MyComp3176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
