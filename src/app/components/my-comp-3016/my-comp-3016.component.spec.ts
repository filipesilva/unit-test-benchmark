import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3016Component } from './my-comp-3016.component';

describe('MyComp3016Component', () => {
  let component: MyComp3016Component;
  let fixture: ComponentFixture<MyComp3016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
