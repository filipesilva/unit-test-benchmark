import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3821Component } from './my-comp-3821.component';

describe('MyComp3821Component', () => {
  let component: MyComp3821Component;
  let fixture: ComponentFixture<MyComp3821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
