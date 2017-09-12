import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3181Component } from './my-comp-3181.component';

describe('MyComp3181Component', () => {
  let component: MyComp3181Component;
  let fixture: ComponentFixture<MyComp3181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
