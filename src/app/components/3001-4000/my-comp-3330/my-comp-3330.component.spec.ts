import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3330Component } from './my-comp-3330.component';

describe('MyComp3330Component', () => {
  let component: MyComp3330Component;
  let fixture: ComponentFixture<MyComp3330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
