import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3363Component } from './my-comp-3363.component';

describe('MyComp3363Component', () => {
  let component: MyComp3363Component;
  let fixture: ComponentFixture<MyComp3363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
