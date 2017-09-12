import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3212Component } from './my-comp-3212.component';

describe('MyComp3212Component', () => {
  let component: MyComp3212Component;
  let fixture: ComponentFixture<MyComp3212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
