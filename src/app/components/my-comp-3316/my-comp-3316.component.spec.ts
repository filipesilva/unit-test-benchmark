import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3316Component } from './my-comp-3316.component';

describe('MyComp3316Component', () => {
  let component: MyComp3316Component;
  let fixture: ComponentFixture<MyComp3316Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3316Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
