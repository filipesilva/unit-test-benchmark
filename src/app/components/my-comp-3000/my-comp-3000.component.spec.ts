import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3000Component } from './my-comp-3000.component';

describe('MyComp3000Component', () => {
  let component: MyComp3000Component;
  let fixture: ComponentFixture<MyComp3000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
