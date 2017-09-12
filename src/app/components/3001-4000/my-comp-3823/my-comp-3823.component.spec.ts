import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3823Component } from './my-comp-3823.component';

describe('MyComp3823Component', () => {
  let component: MyComp3823Component;
  let fixture: ComponentFixture<MyComp3823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
