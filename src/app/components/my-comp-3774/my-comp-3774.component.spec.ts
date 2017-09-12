import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3774Component } from './my-comp-3774.component';

describe('MyComp3774Component', () => {
  let component: MyComp3774Component;
  let fixture: ComponentFixture<MyComp3774Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3774Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
