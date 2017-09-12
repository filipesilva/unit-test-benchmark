import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3024Component } from './my-comp-3024.component';

describe('MyComp3024Component', () => {
  let component: MyComp3024Component;
  let fixture: ComponentFixture<MyComp3024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
