import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3748Component } from './my-comp-3748.component';

describe('MyComp3748Component', () => {
  let component: MyComp3748Component;
  let fixture: ComponentFixture<MyComp3748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
