import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3664Component } from './my-comp-3664.component';

describe('MyComp3664Component', () => {
  let component: MyComp3664Component;
  let fixture: ComponentFixture<MyComp3664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
