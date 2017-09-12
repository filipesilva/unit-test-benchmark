import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3147Component } from './my-comp-3147.component';

describe('MyComp3147Component', () => {
  let component: MyComp3147Component;
  let fixture: ComponentFixture<MyComp3147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
